const dragContainer = document.getElementById('drag-container');
const outputContainer = document.getElementById('output-container');

dragContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dragContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const element = document.createElement('p');
  element.textContent = data;
  outputContainer.appendChild(element);
});

// Example: Simulating adding content with a button
const addButton = document.createElement('button');
addButton.textContent = 'Add Content';
addButton.addEventListener('click', () => {
  const userInput = prompt('Enter your content:');
  if (userInput) {
    const element = document.createElement('p');
    element.textContent = userInput;
    outputContainer.appendChild(element);
  }
});

document.getElementById('editor').appendChild(addButton);
// ... (previous JavaScript code) ...

const blogPosts = document.getElementById('blog-posts');

// Sample blog post data
const sampleBlogPosts = [
  {
    title: 'Introduction to Our Blog',
    content: 'Welcome to our blog! In this post, we introduce...',
  },
  
  // Add more sample blog posts here
];

// Display blog posts
function displayBlogPosts() {
  blogPosts.innerHTML = '';

  sampleBlogPosts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.className = 'blog-post';
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    blogPosts.appendChild(postElement);
  });
}

// Call the function to display initial blog posts
displayBlogPosts();

// ... (previous JavaScript code) ...
