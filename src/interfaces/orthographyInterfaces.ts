

export interface SidebarMenuItemProps{
    to: string;
    icon: string;
    title: string;
    description: string;
    component: JSX.Element
}

export interface GptMessageProp{
    text: string;
}

export interface MyMessageProp{
    text: string;
}

export interface TypingLoaderProp{
    className?: string
}

export interface TextMessageBoxProp{
    onSendMessage: (message:string)=>void,
    placeholder?: string;
    disabledCorrections?: boolean;
    accept?:string; // image/* pdf/* application/*
    options?: TextMessageBoxOption[];
}

export interface OrthographyMessage{
    text: string;
    isGpt: boolean;
}

export interface TextMessageBoxSelectProp{
    onSendMessage: (message:string, selectedOption:string)=>void,
    placeholder?: string;
    disabledCorrections?: boolean;
    options: TextMessageBoxOption[];
}

export interface TextMessageBoxOption{
    id:string;
    text:string;
}