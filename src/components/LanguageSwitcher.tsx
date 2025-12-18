import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-1">
      <Button
        variant={language === 'uz' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('uz')}
        className="text-xs font-medium h-7 px-3"
      >
        UZ
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className="text-xs font-medium h-7 px-3"
      >
        RU
      </Button>
    </div>
  );
}
