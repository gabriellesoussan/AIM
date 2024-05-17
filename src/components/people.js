export default function People({ content }){
    return(
        <div className="mt-24 mx-auto max-w-7xl flex flex-wrap gap-8 px-8 justify-center">
            {content?.people?.people?.map((person, index) => (
                <div key={index} className="font-cabin">
                    <img className="h-76 w-48 object-cover object-center" src={person.headshot} />
                    <p className="text-center text-xl mt-2">{person.name}</p>
                    <p className="text-center text-lg text-neutral-500 italic">{person.title}</p>
                </div>
            ))}
        </div>
    )
}