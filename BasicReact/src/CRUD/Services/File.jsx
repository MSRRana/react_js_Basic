import React from "react";
import {
  useGetApiByNameQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} from "./api";
const File = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetApiByNameQuery();
  return (
    <div>
      <h1>React Rtk Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Fetching...</h2>}
      {isSuccess && (
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <span>{post.title}</span>
            </div>
          ))}
        </div>
      )}
      <AddPost />
    </div>
  );
};

export const AddPost = () => {
  const [AddPost] = useCreatePostMutation();
  const [DeletePost] = useDeletePostMutation();
  const [UpdatePost] = useUpdatePostMutation();

  const posts = {
    id: 2,
    title: "Posted",
    author: "Author",
  };
  const postsUpdate = {
    id: 2,
    title: "updated",
    author: "Author",
  };
  const handler = async () => {
    await AddPost(posts);
  };
  const handlerDelete = async () => {
    await DeletePost(posts.id);
  };
  const handlerUpdate = async () => {
    await UpdatePost(postsUpdate);
  };
  return (
    <>
      <button onClick={handler}>Add Post</button>
      <br />
      <br />
      <button onClick={handlerDelete}>delete Post</button>
      <br />
      <br />
      <button onClick={handlerUpdate}>Update Post</button>
    </>
  );
};

export default File;
