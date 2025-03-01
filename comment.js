let btnPostComment = document.getElementById('btn-post-comment')
btnPostComment.addEventListener('click', function(){
    let textBox = document.getElementById('text-box');
    let commentBox = textBox.value 
    //console.log(comment)
    let commentContainer = document.getElementById('comment-container')
    let commentElement = document.createElement('p');
    commentElement.classList.add('comment')
    commentElement.innerText=commentBox;
    commentContainer.appendChild(commentElement)
    textBox.value= ''
})