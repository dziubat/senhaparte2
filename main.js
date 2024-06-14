document.addEventListener('DOMContentLoaded', () => {
    const campoSenha = document.querySelector('#campo-senha');
    const numeroSenha = document.querySelector('.parametro-senha__texto');
    const botoes = document.querySelectorAll('.parametro-senha__botao');
    const checkboxes = document.querySelectorAll('.checkbox');

    let tamanhoSenha = 12;
    numeroSenha.textContent = tamanhoSenha;

    botoes[0].addEventListener('click', diminuiTamanho);
    botoes[1].addEventListener('click', aumentaTamanho);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', geraSenha);
    });

    function diminuiTamanho() {
        if (tamanhoSenha > 1) {
            tamanhoSenha--;
            numeroSenha.textContent = tamanhoSenha;
            geraSenha();
        }
    }

    function aumentaTamanho() {
        if (tamanhoSenha < 20) {
            tamanhoSenha++;
            numeroSenha.textContent = tamanhoSenha;
            geraSenha();
        }
    }

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    function geraSenha() {
        let senha = '';
        let caracteresDisponiveis = '';

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                switch (checkbox.name) {
                    case 'maiusculas':
                        caracteresDisponiveis += letrasMaiusculas;
                        break;
                    case 'minusculas':
                        caracteresDisponiveis += letrasMinusculas;
                        break;
                    case 'numeros':
                        caracteresDisponiveis += numeros;
                        break;
                    case 'simbolos':
                        caracteresDisponiveis += simbolos;
                        break;
                }
            }
        });

        // Verifica se há caracteres disponíveis
        if (caracteresDisponiveis.length === 0) {
            campoSenha.value = "Selecione ao menos uma opção";
            return;
        }

        for (let i = 0; i < tamanhoSenha; i++) {
            const randomIndex = Math.floor(Math.random() * caracteresDisponiveis.length);
            senha += caracteresDisponiveis[randomIndex];
        }

        campoSenha.value = senha;
    }

    // Gerar uma senha ao carregar a página
    geraSenha();
});

