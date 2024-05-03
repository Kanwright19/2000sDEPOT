"""creating tables

Revision ID: d2d53645739c
Revises: 
Create Date: 2024-04-17 15:18:13.558500

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd2d53645739c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('games',
    sa.Column('game_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('title', sa.String(length=50), nullable=True),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('release_date', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('game_id')
    )
    op.create_table('users',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=True),
    sa.Column('last_name', sa.String(length=50), nullable=True),
    sa.Column('username', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('user_id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_comment_id', sa.Integer(), nullable=True),
    sa.Column('user_comment_id', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=50), nullable=True),
    sa.Column('body', sa.String(length=555), nullable=False),
    sa.ForeignKeyConstraint(['game_comment_id'], ['games.game_id'], ),
    sa.ForeignKeyConstraint(['user_comment_id'], ['users.user_id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('users')
    op.drop_table('games')
    # ### end Alembic commands ###