import Text from '../atoms/Text';

function AboutUsText({ titulo, children }) {
  return (
    <div className="texto-nosotros">
      <Text variant='h2'>{titulo}</Text>
      <Text variant="p">{children}</Text>
    </div>
  );
}

export default AboutUsText;