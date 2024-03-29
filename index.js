const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const methodOverride = require('method-override');
// app.use(methodOverride('_method'))

// import { v4 as uuid } from 'uuid';
// const { v4: uuid } = require('uuid');
let comments = [
    {id: 1,
        username:'ram',
        comment: 'heyyyy how are you',
    },
    {id: 2,
        username:'sita',
        comment: 'shiii shiiii',
    },
    {id: 3,
        username:'laxman',
        comment: 'hahahahahahha',
    },
    {id: 4,
        username:'bharat',
        comment: 'where r u goin',
    }
];

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.get('/tacos', (req,res)=>{
    res.send("GET /Tacos request")
})
app.post('/tacos', (req,res)=>{
    const {meat, qty}= req.body
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.get('/comments/new', (req,res)=>{
    res.render('comments/new')
})
app.post('/comments', (req,res)=>{
    const {username, comment}= req.body;
    comments.push({ username, comment})
    // res.send("IT WORKED")
    res.redirect('/comments');
});

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find((c)=> c.id === parseInt(id));
    res.render('comments/show', {comment:comment});

})
app.listen(3000, ()=>{
     console.log("ON PORT 3000")
    })



     app.get('/comments', (req,res)=>{
        res.render('comments/index', {comments})
     })

     app.patch('/comments/:id', (req,res)=>{
      const {id} = req.params;
        const newCommentText = req.body.comment;
     const foundComment = comments.find(c=> c.id === parseInt(id));
        foundComment.comment = newCommentText;
        res.redirect('/comments');
        // res.send("ALL GOOD")
     })

     app.get('/comments/:id/edit', (req,res)=>{
        const {id} = req.params;
        const comment = comments.find((c)=> c.id === parseInt(id));
        res.render('/comments/edit', {comment})
     })

    //  app.delete('/comments/:id', (req,res)=>{
    //     const {id} = req.params;
    //     comments.filter(c=> c.id !== id);
    //     res.render('/comments')

    //  })
    app.delete("/comments/:id", (req, res) => {
        const { id } = req.params;
        const comment = comments.find((c) => c.id === parseInt(id));
        comments = comments.filter((c) => c.id !== parseInt(id));
        res.redirect("/comments");
    });
// const express = require("express");
// const app = express();
// const path = require("path");
// const { v4: uuid } = require("uuid");
// const methodOverride = require("method-override");

// app.set("views", path.join(__dirname, "/views"));
// app.set("view engine", "ejs");
// //to be able to parse the POST form information from the body
// app.use(express.urlencoded({ extended: true }));
// //to handle json data
// app.use(express.json());
// //method override to provide the methods outside of get and post in the form
// app.use(methodOverride("_method"));

// let comments = [
//     {
//         id: uuid(),
//         username: "Todd",
//         comment: "LOL! SO FUNNY",
//     },
//     {
//         id: uuid(),
//         username: "Valentina",
//         comment: "No way! YOu are joking",
//     },
//     {
//         id: uuid(),
//         username: "Krista",
//         comment: "THE most hilarious thing ever",
//     },
//     {
//         id: uuid(),
//         username: "Scott",
//         comment: "Dying laughing",
//     },
//     {
//         id: uuid(),
//         username: "Skylar",
//         comment: "DON't tell me anymore. I am bought!",
//     },
// ];

// app.get("/comments", (req, res) => {
//     res.render("comments/index.ejs", { comments });
// });
// app.post("/comments", (req, res) => {
//     const { username, comment } = req.body;
//     comments.push({ username: username, comment: comment, id: uuid() });
//     //after accomplishing a task, it redirects us and sends a default get request to the comments route
//     res.redirect("/comments");
// });

// app.get("/comments/new", (req, res) => {
//     res.render("comments/new");
// });

// app.get("/comments/:id", (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find((c) => c.id === id);
//     res.render("comments/show", { comment: comment });
// });

// app.get("/comments/:id/edit", (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find((c) => c.id === id);
//     res.render("comments/edit", { comment });
// });
// app.patch("/comments/:id", (req, res) => {
//     const { id } = req.params;
//     const newCommentText = req.body.comment;
//     const foundComment = comments.find((c) => c.id === id);
//     foundComment.comment = newCommentText;
//     res.redirect("/comments");
// });

// app.delete("/comments/:id", (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find((c) => c.id === id);
//     comments = comments.filter((c) => c.id !== id);
//     res.redirect("/comments");
// });
// app.listen(8000, () => {
//     console.log("LISTENING ON PORT 8000!");
// });

// // REST PATTERN website/resource/action
// // index route      GET /comments/ - list all comments
// // create route     POST /comments/ - create a new comment
// // show route       GET /comments/:id - get one comment using the id.
// // update route     PATCH /comments/:id - update the content of the id comment.
// // destroy route    DELETE /comments/:id - destroy the comment of id.

// [];




