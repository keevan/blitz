import { withFixNodeFileTrace as _withFixNodeFileTrace } from 'next/dist/server/utils';
export const getServerSideProps = _withFixNodeFileTrace(async () => {
  const products = [
    {
      name: 'Hat',
      publishedAt: new Date(0),
    },
  ];
  return {
    props: {
      products,
    },
  };
});
export default class Page {
  render({ products }) {
    return JSON.stringify(products);
  }
}
