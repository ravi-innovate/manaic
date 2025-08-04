'use client';

import { useEffect, useState, useRef } from 'react';
import { TbChevronDown, TbLanguageHiragana } from 'react-icons/tb';

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'mr', label: 'मराठी' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'ur', label: 'اردو' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'or', label: 'ଓଡ଼ିଆ' },
    { code: 'as', label: 'অসমীয়া' },
];

// Extend global Window interface
declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: {
            translate?: {
                TranslateElement?: new (
                    options: Record<string, unknown>,
                    containerId: string
                ) => void;
            };
        };
    }
}

export default function GoogleTranslate() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('Language');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Load Google Translate script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            if (
                typeof window.google !== 'undefined' &&
                typeof window.google.translate !== 'undefined' &&
                typeof window.google.translate.TranslateElement === 'function'
            ) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: LANGUAGES.map((l) => l.code).join(','),
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            } else {
                console.warn('Google Translate script not yet loaded or TranslateElement missing.');
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (lang: string, label: string) => {
        const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
        }
        setSelected(label);
        setOpen(false);
    };

    return (
        <div
            className="relative inline-block text-left mb-6"
            ref={dropdownRef}
            style={{ maxWidth: 'fit-content' }}
            translate="no"
        >
            <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 text-sm font-medium primary-text rounded-full flex items-center justify-between gap-2 shadow-md"
                style={{ backgroundColor: 'var(--hover-background)' }}
                aria-label="change language"
            >
                <TbLanguageHiragana /> {selected}
                <span className="ml-2">
                    <TbChevronDown />
                </span>
            </button>

            {open && (
                <div
                    className="absolute mt-2 rounded-xl shadow-lg z-50 max-h-20 overflow-y-auto"
                    style={{ width: '100%', backgroundColor: 'var(--hover-background)' }}
                >
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code, lang.label)}
                            className="block w-full text-left px-4 py-2 text-sm primary-text hover:bg-[var(--background-1)] transition"
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Hidden Google Translate container */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
        </div>
    );
}
