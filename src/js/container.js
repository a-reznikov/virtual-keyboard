export function creatContainer() {
  const TITLE = 'Virtual keyboard';
  const OS_WINDOWS = 'Keyboard created in the Windows operating system';
  const LANGUAGE = 'To switch the language combination: left ctrl + alt';
  const body = document.querySelector('body');
  const container = document.createElement('main');
  container.className = 'container';
  const titleContainer = document.createElement('h1');
  titleContainer.className = 'title';
  titleContainer.textContent = TITLE;
  const textContent = document.createElement('textarea');
  textContent.className = 'textarea';
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = OS_WINDOWS;
  const language = document.createElement('p');
  language.className = 'language';
  language.textContent = LANGUAGE;

  container.append(titleContainer);
  container.append(textContent);
  container.append(keyboard);
  container.append(description);
  container.append(language);
  body.append(container);
  return body;
}
