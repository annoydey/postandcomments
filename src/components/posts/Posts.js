import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, #00ffff 30%, #00ff99 90%)',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  media: {
    height: 20,
  },
});

const Posts = (props) => {
    const classes = useStyles();
    const {id,title,body} = props.userspost
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h2>Title : {title}</h2> 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>{body}</p>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/userspost/${id}`}>
                        <Button className="btn btn-success" variant="contained" size="small" color="secondary">
                            Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;