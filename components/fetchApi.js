import numFloat from '../components/helpers/numfloat';

export default {
  getAllItems: async function getStaticProps() {
    let newHeader = new Headers();
    newHeader.append('Content-Type', 'application/json');
    newHeader.append('Authorization', `${process.env.SECRET_KEY}`);
    
    let reqOptions = {
      method: 'GET',
      headers: newHeader,
      redirect: 'follow',
    };
      const res = await fetch(`http://localhost:6000/v1/items`, reqOptions);
      const items = await res.json();
      return {
        props: {
          items,
        },
      };
    },
    getOneItem: ()=> {
      console.log('THIS WORKS TOO!')
    }
}
