import { useRouter } from 'next/router';

//our-domain.com/news/something-here

function DetailPage() {
	const router = useRouter();

	const newsId = router.query.newsId;

	// send a request to the backend API to fetch news item with newsId - will not do here

	return <h1>The Detail Page</h1>;
}

export default DetailPage;
