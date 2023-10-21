export function createPromptCodeExplain(language: string, functionCode: string): string {
	return `Please explain the following${language}Code: \n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}

export function createPromptCodeImprove(language: string, functionCode: string): string {
	return `Please optimize this${language}code：\n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}

export function createPromptCodeClean(language: string, functionCode: string): string {
	return `Please clean this${language}code：\n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}

export function createPromptGenerateComment(language: string, functionCode: string): string {
	return `Generate${language}代comment：\n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}

export function createPromptGenerateUnitTest(language: string, functionCode: string): string {
	return `Generate${language}unit test：\n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}

export function createPromptCheckPerformance(language: string, functionCode: string): string {
	return `Check${language}code. Give suggestions：\n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}

export function createPromptCheckSecurity(language: string, functionCode: string): string {
	return `Check${language}for security vulnerabilities：\n\`\`\`${language}\n${functionCode}\n\`\`\`\n`;
}