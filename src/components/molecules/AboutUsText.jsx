import Text from '../atoms/Text';

function AboutUsText({ titulo, children }) {
  return (
    <div className="texto-nosotros">
      <h2>{titulo}</h2>
      <Text variant="p">{children}</Text>
    </div>
  );
}

export default AboutUsText;