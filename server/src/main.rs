#![feature(plugin)]
#![plugin(rocket_codegen)]
#![feature(custom_derive)]

extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;
extern crate dotenv;
extern crate rusqlite;

mod models;

use std::env;
use std::io;
use std::path::{Path, PathBuf};
use rocket_contrib::{Json, Value};
use rocket::response::NamedFile;
use rocket::response::status;
use rocket::request::Form;
use models::*;


#[get("/api/blog-posts")]
fn getBlogPosts() -> Json<Vec<BlogPost>> {
    let conn = rusqlite::Connection::open("./goodman.db").expect("Goof");
    let mut statement = conn.prepare("select * from blog_posts order by created_on desc;").expect("Could not run query");

    let collection = statement
        .query_map(&[], |row| { BlogPost { id: row.get(0), title: row.get(1), body: row.get(2), created_on: row.get(3), published: row.get(4) }})
        .expect("Iterator badman")
        .map(|x| x.expect("Value doesn't make no sense"))
        .collect();
    
    Json(collection)
}

#[get("/api/blog-comments/<id>/count")]
fn getCommentCount(id: i32) -> Json<BlogCommentCount> {
    let conn = rusqlite::Connection::open("./goodman.db").expect("Couldn't open db!");
    let mut statement = conn.prepare(&format!("select count(*) from blog_comments where blog_post = {}", id)).expect("Could not run query");

    let mut result: Vec<_> = statement
        .query_map(&[], |row| { BlogCommentCount { count: row.get(0) }})
        .expect("iterator badman")
        .map(|x| x.expect("Bad value"))
        .collect();

    Json(result.pop().expect("couldn't pop"))
}

#[get("/api/blog-comments/<id>/comments")]
fn getComments(id: i32) -> Json<Vec<BlogComment>> {
    let conn = rusqlite::Connection::open("./goodman.db").expect("Couldn't open db!");
    let mut statement = conn.prepare(&format!("select * from blog_comments where blog_post = {}", id)).expect("Could not run query");

    let collection = statement
        .query_map(&[], |row| { 
            BlogComment {
                id: row.get(0),
                author: row.get(1),
                body: row.get(2),
                created_on: row.get(3),
                deleted: row.get(4),
                parent_comment: row.get(5),
                blog_post: row.get(6)
            }
        })
        .expect("iterator badman")
        .map(|x| x.expect("Bad value"))
        .collect();

    Json(collection)
}


#[derive(Debug, Deserialize)]
struct Comment {
    pub comment: String
}

#[post("/api/blog-comments/<id>/comments", data = "<comment>")]
fn postComment(id: i32, comment: Json<Comment>) -> String {
    println!("{:?}", &format!("insert (author, body, parent_comment, blog_post) values ('Anonymous', '{}', null, {})", comment.comment, id));
    let conn = rusqlite::Connection::open("./goodman.db").expect("Couldn't open db!");
    let mut statement = conn.prepare(&format!("insert (author, body, parent_comment, blog_post) values ('Anonymous', '{}', null, {})", comment.comment, id)).expect("Could not run query");

    String::from("asdf")
}

#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open(r"C:\hackathon\andrewwelton.me\client\build\index.html")
}

#[get("/static/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new(r"C:\hackathon\andrewwelton.me\client\build\").join(file)).ok()
}

fn main() {
    rocket::ignite().mount("/", routes![index,files,getBlogPosts,getCommentCount,getComments,postComment]).launch();
}
