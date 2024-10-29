import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 80rem;
  height: 56.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  background: white;
  box-shadow: 0rem 0.625rem 2.5rem 1.25rem rgba(0, 0, 0, 0.25);
`;

export const InputContainer = styled.div<{ isClicked: boolean; isFirstRender: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 3.75rem;
  transition: ${({ isFirstRender }) => (isFirstRender ? 'transform 0.5s ease-in-out' : 'none')};
  transform: ${({ isClicked }) => (isClicked ? 'translateY(-10rem)' : 'translateY(0)')};
`;

export const InputText = styled.p`
  font-size: 4rem;
  font-weight: 600;
  line-height: normal;
`;

export const InputBox = styled.div`
  display: flex;
  width: 67.5rem;
  height: 6.25rem;
  padding-right: 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 3.125rem;
  border: 5px solid #333;
  background: #343434;
`;

export const Input = styled.input`
  display: flex;
  width: 90%;
  padding-left: 3.125rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  background: #343434;
  outline: none;

  ::placeholder {
    color: #888;
  }
`;

export const IconButton = styled.button<{ isEmpty: boolean }>`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  background: ${({ isEmpty }) => (isEmpty ? '#888' : '#CCC')};
  cursor: pointer;
`;

export const Spinner = styled.div`
  width: 8rem;
  height: 8rem;
  border: 0.75rem solid #ccc;
  border-top: 0.75rem solid white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const PreviousButton = styled.button`
  display: flex;
  padding: 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const FrameBox = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;

  img {
    border: 2px solid transparent;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: purple;
    }

    &.selected {
      border-color: purple;
    }
  }
`;
