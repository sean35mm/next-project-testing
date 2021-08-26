import { Fragment } from 'react';
import Link from 'next/link';

function News() {
	return (
		<Fragment>
			<h1>This is the News Page</h1>
			<ul>
				<li>
					<Link href='/news/something'>NextJS is a Great Framework for React</Link>
				</li>
				<li>
					<Link href='/news/something2'>This is a News Article</Link>
				</li>
				<li>
					<Link href='/news/something3'>This is also a News Article</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default News;
