import {FC} from "react";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {IAuthor, authorValue} from "../../_store/slices/author";

/**
 * Component File Description
 */
const Detail: FC<any> = () => {
    const {push} = useHistory();
    const author: IAuthor = useSelector<IStore, IAuthor>(authorValue);

    return (
        <>
            <h1>Author</h1>
            <div className="row mb-4">
                <div className="col">
                    {author && <>
                        <div><strong>Name : </strong>{author.name}</div>
                        <div><strong>Surname : </strong>{author.surname}</div>
                        <div><strong>Age : </strong>{author.age}</div>
                        <div><strong>Job : </strong>{author.job}</div>
                    </>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button variant="contained" color="primary" onClick={() => push('/author/edit')}>
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Detail;