import Link from 'next/link';

const Back: React.FC = () => {
    return (
    <form >
        <Link href="/">
          <button className="portButton">Back</button>
        </Link>
      </form>
    );
  };
  
  export default Back;