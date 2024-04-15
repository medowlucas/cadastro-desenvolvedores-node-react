 // Função auxiliar para calcular a idade
export function calculateAge(datanascimento: string): number {
    const aniversario = new Date(datanascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - aniversario.getFullYear();
    const m = hoje.getMonth() - aniversario.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < aniversario.getDate())) {
        idade--;
    }
    return idade;
}

 // Função auxiliar para verificar se a data de nascimento está no formato correto
export function isValidDate(dateString: string): boolean {
    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    return regexData.test(dateString);
}
  