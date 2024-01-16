
interface portoProps {
  img: string;
  link: string;
  title: string;
  text: string;
}

export default function PortofolioCard({ img, link, title, text }: portoProps) {
  return (
    <div className="text-white">
      <div className="w-[30rem] px-10 py-10">
        <div className=" ">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={img} alt="" className="rounded-t-xl" />
          </a>
        </div>
        <div className="bg-slate-900 pt-5 px-10 pb-8 rounded-b">
          <h1 className="pt-3 pb-3">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
