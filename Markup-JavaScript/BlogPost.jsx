export default function BlogPost(){
    const title = "What is a Blog?";
    const content = "A blog is an online journal where individuals or groups share their thoughts, experiences, and knowledge on various topics. It often includes written posts, images, and multimedia elements. Blogs can cover a wide range of subjects, from personal musings to professional insights, and encourage reader interaction through comments.";
    const author = "John Doe";

    return (
        <>
        <h1>{title}</h1>
        <h2>{content}</h2>
        <h2>Written By - {author}</h2>
        </>
    );
}