import { ReactNode } from 'react';

type ContactLinkItemProps = {
  href: string;
  icon: ReactNode;
  text: string;
};

export const ContactLinkItem = ({ href, icon, text }: ContactLinkItemProps) => {
  return (
    <a className='hover:text-cyan-400 flex gap-2 items-center' href={href}>
      {icon}
      {text}
    </a>
  );
};
