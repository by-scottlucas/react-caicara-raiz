const SITE_URL = import.meta.env.VITE_SITE_URL;
const API_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}`;

export async function fetchPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    return [];
  }
}

export async function getPostDetail(id: string) {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao carregar post:", error);
    return null;
  }
}
