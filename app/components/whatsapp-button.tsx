import { Button } from './ui/button';
import { Icons } from './icons';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // TODO: Replace 'your-whatsapp-url' with the actual WhatsApp chat URL
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=your-phone-number';

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed right-1 bottom-8 md:right-8 z-[49] p-6 md:p-8 rounded-md"
    >
      <Icons.Whatsapp className="w-10 h-10 md:mr-2" />

      <span className="text-sm">
        CHAT WITH US <br />
        Typically replies within minutes!!
      </span>
    </Button>
  );
};
