User
    id  
    username
    email
    password

BlogPost
    id
    title
    content
    userId

Comment
    id
    content
    BlogPostId (fk)
    userId(fk)

    User can have many BlogPost = one to many
    BlogPost can have many comments = one to many
    Comment has one user = one to one
    BlogPost has one user = one to one