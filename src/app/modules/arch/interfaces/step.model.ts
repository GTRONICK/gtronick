export interface Step {
    index: number,
    title?: string,
    subtitle?: string,
    description?: string,
    input?: PromptInput,
    commands?: Command[],
}

export interface Command {
    command: string,
    comments?: string[],
}

export interface PromptInput {
    prompt: string,
    varName: string,
}