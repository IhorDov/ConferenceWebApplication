import Participant from './Participant';

function DynamicTable({ data }) {
    const exelObject = data.length > 0 ? data : {};

    return (
        <div>
            {!exelObject.length && <h2>Excel list is empty</h2>}
            {exelObject.map((deltager, index) => {
                return <Participant key={index} {...deltager} />;
            })}
            <Participant />
        </div>
    );
}

export default DynamicTable;
