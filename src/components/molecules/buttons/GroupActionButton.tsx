import { ActionIcon, Group } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

type GroupActionButtonProps = {
  onUpdate?: () => void;
  onDelete?: () => void;
};

export const GroupActionButton: React.FC<GroupActionButtonProps> = (props) => {
  const { onUpdate, onDelete } = props;

  return (
    <Group spacing={4} position="right" noWrap>
      {onUpdate && (
        <ActionIcon color="blue" onClick={onUpdate}>
          <IconPencil size={16} />
        </ActionIcon>
      )}
      {onDelete && (
        <ActionIcon color="red" onClick={onDelete}>
          <IconTrash size={16} />
        </ActionIcon>
      )}
    </Group>
  );
};
