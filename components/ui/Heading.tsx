interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ description, title }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
//2:48
export default Heading;
