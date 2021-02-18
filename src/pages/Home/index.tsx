import {FC} from "react";
import {useSelector} from 'react-redux';
import {authorValue, IAuthor} from '../../_store/slices/author'

/**
 * Component File Description
 */
const Home: FC<any> = () => {
    const author: IAuthor = useSelector<IStore, IAuthor>(authorValue);
    return (
        <>
            <h1>Welcome, {author.name} {author.surname}</h1>
        </>
    );
};

export default Home;