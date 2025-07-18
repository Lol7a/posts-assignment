import { Post, User, Comment } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (): Promise<Post[]> =>
	fetch(`${BASE_URL}/posts`).then((res) => res.json());

export const fetchComments = async (): Promise<Comment[]> =>
	fetch(`${BASE_URL}/comments`).then((res) => res.json());

export const fetchUsers = async (): Promise<User[]> =>
	fetch(`${BASE_URL}/users`).then((res) => res.json());

export const fetchPost = async (id: number): Promise<Post> =>
	fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());

export const fetchPostComments = async (id: number): Promise<Comment[]> =>
	fetch(`${BASE_URL}/posts/${id}/comments`).then((res) => res.json());
