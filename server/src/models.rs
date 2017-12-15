#[derive(Debug, Serialize, Deserialize)]
pub struct BlogPost {
  pub id: i32,
  pub title: String,
  pub body: String,
  pub created_on: i32,
  pub published: bool
}

#[derive(Debug, Serialize, Deserialize)]
pub struct BlogComment {
  pub id: i32,
  pub author: String,
  pub body: String,
  pub created_on: i64,
  pub deleted: bool,
  pub parent_comment: Option<i32>,
  pub blog_post: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct BlogCommentCount {
  pub count: i32
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MusicReview {
  pub id: i32,
  pub title: String,
  pub body: String,
  pub created_on: i32,
  pub published: bool
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MusicComment {
  pub id: i32,
  pub author: String,
  pub body: String,
  pub created_on: i32,
  pub deleted: bool,
  pub parent_comment: i32,
  pub blog_post: i32,
}