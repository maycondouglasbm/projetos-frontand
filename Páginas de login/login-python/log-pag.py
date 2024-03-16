from PySimpleGUI import PySimpleGUI as sg

sg.theme('Reddit')
layout = [
    [sg.Text('Usuário'),sg.Input(key='usuario', size=(20,1))],
    [sg.Text('Senha'),sg.Input(key='senha',password_char='*', size=(20, 1))],
    [sg.Checkbox('Salvar o login')],
    [sg.Button('Entrar')]
]
janela = sg.Window('Tela de login', layout)

while True:
    eventos, valores = janela.read()
    if eventos == sg.WINDOW_CLOSED:
        break
    if eventos == 'Entrar':
        if valores['usuários'] == 'maycon' and valores['senha'] == "123456":
            print('Seja bem-vindo')
            