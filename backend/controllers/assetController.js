const db = require('../db');

exports.getAssets = (req, res) => {
    const sql = 'SELECT * FROM assets';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching assets:', err);
            return res.status(500).json({
                message: 'Database Error'
            });
        }

        res.status(200).json(results);
    });
};

exports.addAsset = (req, res) => {
    const { asset_name, asset_type, owner } = req.body;

    const sql = `
        INSERT INTO assets (asset_name, asset_type, owner)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [asset_name, asset_type, owner],
        (err, result) => {
            if (err) {
                console.error('Error adding asset:', err);
                return res.status(500).json({
                    message: 'Database Error'
                });
            }

            res.status(201).json({
                message: 'Asset Added',
                assetId: result.insertId
            });
        }
    );
};
exports.deleteAsset = (req, res) => {

    const id = req.params.id;

    console.log(
        "Delete Request Received for Asset:",
        id
    );

    const sql =
        "DELETE FROM assets WHERE id = ?";

    db.query(
        sql,
        [id],
        (err, result) => {

            if (err) {

                console.error(
                    "Error deleting asset:",
                    err
                );

                return res.status(500).json({
                    message: "Database Error"
                });
            }

            res.status(200).json({
                message: "Asset Deleted"
            });

        }
    );
};
