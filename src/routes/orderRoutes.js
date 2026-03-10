const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', orderController.createOrder);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/list', orderController.getAllOrders);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 */
router.get('/:id', orderController.getOrderById);

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualizar pedido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido atualizado
 *       404:
 *         description: Pedido não encontrado
 */
router.put('/:id', orderController.updateOrder);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Remover pedido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Pedido removido
 *       404:
 *         description: Pedido não encontrado
 */
router.delete('/:id', orderController.deleteOrder);
module.exports = router;