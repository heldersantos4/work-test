import { TodoList } from '@/components/Todo';
import { Typograph } from '@/components/Typograph';

export default function Index() {
  return (
    <>
      <Typograph sx='title'>useCallback e useReducer</Typograph>
      <Typograph sx='subtitle'>Combinação poderosíssima</Typograph>
      <Typograph sx='paragraph'>
        Aqui há um aliases. <b>Tem de tomar cuidado com renderizações desnecessárias.</b>
      </Typograph>

      <TodoList />
    </>
  );
}
