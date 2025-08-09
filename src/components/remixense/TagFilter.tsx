import { useMemo } from "react";
import { Button } from "@/components/ui/button";

interface TagFilterProps {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
}

export const TagFilter = ({ tags, selected, onToggle }: TagFilterProps) => {
  const normalized = useMemo(() => selected.map(t => t.toLowerCase()), [selected]);
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const active = normalized.includes(tag.toLowerCase());
        return (
          <Button
            key={tag}
            variant="chip"
            size="sm"
            data-state={active ? 'on' : 'off'}
            onClick={() => onToggle(tag)}
            aria-pressed={active}
            className="hover-scale"
          >
            #{tag}
          </Button>
        );
      })}
    </div>
  );
}

export default TagFilter;
