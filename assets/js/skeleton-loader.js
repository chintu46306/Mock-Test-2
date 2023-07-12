// Loader Class Name
const skeletonClassName = "skl-load"
// Loader Text Fields default text-field
const sklTxtField = `<div class="text-col w-100 h-100"></div>`
// Posts Container
const postsField = document.getElementById('posts')

// Clone Post Cart item
const postItemClone = document.querySelectorAll('.post-item')[0].cloneNode(true)

// Posts JSON Data
let postData;

// Retrieve Post Data
fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(responseData=>{
        postData = responseData
        // Add New Post Item if data is more than 1
        Object.keys(responseData).map(k=>{
            if(k > 0){
                postsField.appendChild(postItemClone.cloneNode(true))
            }
        })
        
        // Select all post items
        const postItem = document.querySelectorAll('.post-item')


        postItem.forEach((el,k)=>{
            // Create a Skeleton Loader in post items
            createSkeletonLoader(el)
            setTimeout(()=>{
            // Load the data
                loadData(el,k)
            },6000)
        })

        // Skeleton Creator Function
        function createSkeletonLoader(postCard){
            postCard.classList.add(skeletonClassName)
            postCard.querySelector('.user-name-container').innerHTML = `${sklTxtField}`
            postCard.querySelector('.post-description').innerHTML = `${sklTxtField}${sklTxtField}${sklTxtField}`
        }

        // Post Items data loader
        function loadData(postCard, dataKey){
            var post = postData[dataKey]
            postCard.querySelector('.user-name-container').innerHTML = `${post.username}`;
            postCard.querySelector('.user-img-container').innerHTML = `<img class="img-fluid" src="${post.user_image_path}" alt="${post.username} Avatar">`;
            postCard.querySelector('.post-description').innerHTML = `${post.post_description}`;
            postCard.querySelector('.post-img').innerHTML = `<img class="img-fluid" src="${post.post_image_path}" alt="${post.username} Post Image">`;
            if(postCard.classList.contains(skeletonClassName))
            postCard.classList.remove(skeletonClassName)
        }

    })
    .catch(error=>{
        console.error(error)
    })
