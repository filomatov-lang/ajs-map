import ErrorRepository from '../app.js';

describe('Класс ErrorRepository', () => {
  test('translate возвращает описание по существующему коду', () => {
    const repo = new ErrorRepository();
    repo.errorData.set(404, 'Страница не найдена');

    expect(repo.translate(404)).toBe('Страница не найдена');
  });

  test('translate возвращает Unknown error для несуществующего кода', () => {
    const repo = new ErrorRepository();

    expect(repo.translate(999)).toBe('Unknown error');
  });

  test('translate возвращает Unknown error для нечислового кода', () => {
    const repo = new ErrorRepository();
    repo.errorData.set(404, 'Страница не найдена');

    expect(repo.translate('404')).toBe('Unknown error');
  });
});
