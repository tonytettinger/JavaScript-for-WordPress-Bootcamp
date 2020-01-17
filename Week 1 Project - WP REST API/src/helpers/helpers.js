
import wpapi from './wpapi';

function renderPosts(){
    wpapi.posts()
    .embed()
    .then( posts => {
        let postsList = posts.map(content => {
            renderContent(content)
        })
    })

}

function renderContent(content) {
    let article = document.createElement('article')
    let renderedTitle = getContent(content, "title", "rendered")
    let renderedContent = getContent(content, "content", "rendered")
    const postsRoot = document.getElementById("posts-inner")
    article.appendChild(renderedTitle)
    let imageSrc = getImage(content)
    if(imageSrc != false ){
        let image = document.createElement('img')
        image.src = imageSrc
        article.appendChild(image)
    }
    article.appendChild(renderedContent)
    article.className += "post-listing"
    postsRoot.appendChild(article)
}

function getContent(content, route1, route2) {
    let postContent = document.createElement('div')
    let contentMarkup = content[route1][route2]
    postContent.innerHTML = contentMarkup
    return postContent
}

function getImage(content) {
if ( content._embedded[ 'wp:featuredmedia' ] ) {
    let featuredImg = content._embedded[ 'wp:featuredmedia' ][ 0 ].source_url;
    return featuredImg
} else {
    return false
}
}

export default renderPosts;