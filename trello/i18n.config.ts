export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'vi',
    messages: {
        vi: {
            welcome: 'Chào mừng',
            boards: "Bảng",
            allboards: "Tất cả các bảng",
            addnewboard: "Thêm bảng mới",
            addnewcolumn: "Thêm cột mới",
            addnewtask: "Thêm nhiệm vụ mới",
            deleteallcolumn: 'Xóa tất cả các mục trong cột',
            copycolumn: 'Sao chép cột',
            deletecolum: 'Xóa cột'
        },
        en: {
            welcome: 'Welcome',
            boards: "Boards",
            allboards: "All Boards",
            addnewboard: "Add new board",
            addnewcolumn: "Add new column",
            addnewtask: "Add new task",
            deleteallcolumn: 'Delete all items in column',
            copycolumn: 'Copy column',
            deletecolum: 'Delete column'
        }
    }
}))
