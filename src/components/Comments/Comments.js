import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      background: 'linear-gradient(45deg, #00ffff 30%, #00ff99 90%)',
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      padding: '10px',
      borderRadius: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    media: {
      height: 20,
    },
  });

  const useStyles1 = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    media: {
      height: 20,
    },
  });



const Comments = () => {
    const {postId} = useParams();
    const [user_s,users_comments] = useState([]);
    const [user_spost,users_post] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => users_comments(data));
    },[])

    useEffect(()=>{
        const url1 = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url1)
        .then(res => res.json())
        .then(data => users_post(data)); 
    },[])


    const classes = useStyles();
    const classes1 = useStyles1();
    return (
        <div>
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h2>{user_spost.title}</h2> 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p>{user_spost.body}</p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <Card className={classes1.root}>
                    <h2><br/>View All Comments</h2>
                    <CardActionArea>
                        {
                            user_s.map(   
                                comments=>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <h5>Name: {comments.name} <br/> Email: {comments.email} </h5>
                                     
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <h6>{comments.body}<br/><br/></h6>
                                </Typography>
                                </CardContent> 
                            )
                        }
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Comments;

{/* <h5><br/>Name: {comments.name} <br/> Email: {comments.email} <br/> </h5> */}