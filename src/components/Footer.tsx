type Props = {
  children: React.ReactNode;
};

function Footer({ children }: Props) {
  return <footer>{children}</footer>;
}

export default Footer;
