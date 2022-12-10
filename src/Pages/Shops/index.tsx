import type { LoaderFunctionArgs } from '@remix-run/router';
import { useLoaderData } from 'react-router-dom';

type Shop = {
  text: string;
  type: string;
  payload: {
    shop_slug: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FetchedData = { shops: Shop[]; location: any };

export async function loader({
  request,
  params
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
LoaderFunctionArgs): Promise<FetchedData | undefined> {
  const searchQuery = new URL(request.url).searchParams.get('text');
  const url = `https://staging-snap.tablecheck.com/v2/autocomplete?locale=${params.locale}&text=${searchQuery}}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      // 200以外ならばエラーメッセージを投げる
      throw new Error(
        `response.status = ${response.status}, response.statusText = ${response.statusText}`
      );
    }
    const jsonData = await response.json();
    return jsonData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export function Shops(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = useLoaderData();

  if (data.shops.length === 0) {
    return <div>no data</div>;
  }

  const shops = data.shops.map((shop: Shop) => {
    const { shop_slug } = shop.payload;
    return (
      <div key={shop_slug}>
        <div>{shop.text}</div>
      </div>
    );
  });

  return <div>{shops}</div>;
}
