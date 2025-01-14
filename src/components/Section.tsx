
import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title = "", items = [] }) {


    return (
        <section className=" m-1  ">
            <Title title={title} />
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ml-5">
                {items?.map(item => <SongItem item={item} key={item.id} />)}
            </div>
        </section>
    )
}

export default Section
