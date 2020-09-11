import fire from '../../firebase';


export function getBlogs(){
    return(dispatch) => {
        fire.database().ref('/blogs').on('value', snapshot=>{
            dispatch({
                type:"BLOGS_FETCH",
                payload : snapshot.val()
            })
        })
    }
}
export function PostBlog(title, author, blog) {
    return(dispatch) => {
        fire.database().ref('/blogs').push({title, author, blog})
    }
}
export function EditBlogs(title, author, blog, key) {
    return(dispatch) => {
        fire.database().ref('/blogs').child(key).update({title,author,blog})
    }
}
export function Delete(key) {
    return(dispatch) => {
        fire.database().ref()
    }
}
export function DeleteBlogs(key) {
    return(dispatch) => {
        fire.database().ref(`/blogs/${key}`).remove()
    }
}






