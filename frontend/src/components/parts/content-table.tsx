import classNames from "classnames";
import React from "react";

type TableProps = React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

const Table: React.FC<TableProps> = ({ children, className, ...props }) => {
  return (
    <table
      {...props}
      className={classNames("w-full border border-gray-300", className)}
    >
      {children}
    </table>
  );
};

type TSectionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const Thead: React.FC<TSectionProps> = ({ children, className, ...props }) => {
  return (
    <thead
      {...props}
      className={classNames("border-b-[3px] p-2 font-bold", className)}
    >
      {children}
    </thead>
  );
};

const Tbody: React.FC<TSectionProps> = ({ children, className, ...props }) => {
  return (
    <tbody {...props} className={classNames(className)}>
      {children}
    </tbody>
  );
};

type TRProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

const TR: React.FC<TRProps> = ({ children, className, ...props }) => {
  return (
    <tr
      {...props}
      className={classNames("last:border-0 cursor-pointer ", className)}
    >
      {children}
    </tr>
  );
};

type CellProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

const TH: React.FC<CellProps> = ({ children, className, ...props }) => {
  return (
    <th {...props} className={classNames("border py-2 px-4", className)}>
      {children}
    </th>
  );
};

const TD: React.FC<CellProps> = ({ children, className, ...props }) => {
  return (
    <td {...props} className={classNames("border py-2 px-4", className)}>
      <p className="py-2">{children}</p>
    </td>
  );
};

type ContentTableType = {
  table: React.ComponentType<TableProps>;
  thead: React.ComponentType<TSectionProps>;
  tbody: React.ComponentType<TSectionProps>;
  tr: React.ComponentType<TRProps>;
  th: React.ComponentType<CellProps>;
  td: React.ComponentType<CellProps>;
};

class ContentTable {
  contentTable: ContentTableType;

  constructor() {
    this.contentTable = {
      table: Table,
      thead: Thead,
      tbody: Tbody,
      tr: TR,
      th: TH,
      td: TD,
    };
  }
}

export const ContentTableGroup = new ContentTable();
