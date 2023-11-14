type Props = {
  children: React.ReactElement;
};

function Footer({ children }: Props) {
  return <footer>{children}</footer>;
}

export default Footer;
