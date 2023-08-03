import path from "path";

export const getStaticPaths = async () => {
  const res = await fetch('/data/goods');
  const data = await res.json();


const paths = data.map (goods => {
  return {
    params: {id: goods.id}
  }

})
  return {
    path,
    fallback: false
  }
}

export const getStaticProps = async () => {
const id = context.params.id;

const res = await fetch(`/data/goods/${id}`);
const data = await res.json();

return {
  props: {goods: data }
}
}

function Details({goods}) {
  console.log('details goods >>>', goods)
  return <>
    <div>Details</div>
    </>
}

export default Details;

